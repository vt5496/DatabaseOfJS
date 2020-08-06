t = (...t) => console.log(...t);

let a = 'string',
    b = 13,
    c = true,
    d = null,
    e = undefined,
    f = Symbol('symbol'),
    g = {first: 'first'}

//String conversion
t(`
String conversion`)
//can use alert and alert(String(f))
t(b, String(b), c, String(c))
t(d, String(d), e, String(e), g, String(g))
t(a + b)



//Numeric conversion

t(`
Numeric conversion`)
t('13' / '13')
t(null + b)
t(undefined + b)
t(+'23')
//Number(f) Symbol can't
t(Number('   13  '), a, Number(a), b, Number(b))
t(c, Number(c), d, Number(d), e, Number(e))

//Boolean conversion

t(`
Boolean conversion`)
t(a, Boolean(a), b, Boolean(b), c, Boolean(c))
t(d, Boolean(d), e, Boolean(e), f, Boolean(f))
t(g, Boolean(g))