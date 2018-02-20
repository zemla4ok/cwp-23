const mendeleev = require('mendeleev');

module.exports = (element) => {
    const desc = mendeleev(element);
    if (desc) {
        return desc.number + '.' +
               desc.name + '/' +
               desc.weight;
    }
    else throw new Error('Element does not exits');
};