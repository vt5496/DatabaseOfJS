const roads = [
    "Дом Алисы-Дом Боба", "Дом Алисы-Почта",
    "Дом Дарии-Дом Эрни", "Дом Эрни-дом Греты",
    "Дом Греты-Магазин", "Рынок-Почта",
    "Рынок-Ратуша", "Дом Алисы-Склад",
    "Дом Боба-Ратуша", "Дом Дарии-Ратуша",
    "Дом Греты-Ферма", "Рынок-Ферма",
    "Рынок-Магазин", "Магазин-Ратуша"
];

const buildGraph = edges => {
    const graph = Object.create(null)
    const addRoad = (from, to) => {
        if (graph[from] === undefined) {
            graph[from] = [to];
        } else {
            graph[from].push(to)
        }
    }
    for (let [from, to] of edges.map(edge => edge.split('-'))) {
        addRoad(from, to);
        addRoad(to, from);
    }
    return graph
}
const roadGraph = buildGraph(roads)

class VillageState {
    constructor(place, parcels) {
        this.place = place;
        this.parcels = parcels
    }

    move(destination) {
        if (!roadGraph[this.place].includes(destination)) {
            return this
        } else {
            let parcels = this.parcels.map(p => {
                if (p.place !== this.place) return p;
                return ({
                    place: destination, adress: p.adress
                })
            }).filter(p => p.place !== this.place)
            return new VillageState(destination, parcels)
        }
    }
}

let first = new VillageState(
    "Почта",
    [{place: "Почта", address: "Дом Алисы"}]
);
let next = first.move("Дoм Алисы");

function runRobot(state, robot, memory) {
    for (let turn = 0; ; turn++) {
        if (state.parcels.length === 0) {
            console.log("Bыnoлнeнo за ${turn} ходов");
            break;
        }
        let action = robot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;
        console.log("Пepexoд в направлении ${action.direction}");
    }
}

function randomPick(array) {
    let choice = Math.floor(Math.random() * array.length);
    return array[choice];
}

function randomRobot(state) {
    return ({
        direction: randomPick(roadGraph[state.place])});
}

VillageState.random = function (parcelCount = 5) {
    let parcels = [];
    for (let i = 0; i < parcelCount; i++) {
        let address = randomPick(Object.keys(roadGraph));
        let place;
        do {
            place = randomPick(Object.keys(roadGraph));
        }
        while (place === address);
        parcels.push({place, address});
    }
    return new VillageState("Пoчтa", parcels)
};

const mailRoute = [
    "Дом Алисы", "Сарай",
    "Дом Алисы", "Дом Боба",
    "Ратуша", "Дом Дарии",
    "Дом Эрни", "Дом Греты",
    "Магазин", "Дом Греты",
    "Ферма", "Рынок", "Почта"
];

function routeRobot(state, memory) {
    if (memory.length === 0) memory = mailRoute;
    return ({
        direction: memory[0],
        memory: memory.slice(l)
    });
}

function findRoute(graph, from, to) {
    let work = [{at: from, route: []}];
    for (let i = 0; i < work.length; i++) {
        let {at, route} = work[i];
        for (let place of graph[at]) {
            if (place === to) return route.concat(place);
            if (!work.some(w => w.at === place)) {
                work.push({at: place, route: route.concat(place)});
            }
        }
    }
}

function goalOrientedRobot({place, parcels}, route) {
    if (route.length === 0) {
        let parcel = parcels[0];
        if (parcel.place !== place) {
            route = findRoute(roadGraph, place, parcel.place);
        } else {
            route = findRoute(roadGraph, place, parcel.address);

        }
        return {direction: route[0], memory: route.slice(l)};
    }
}

