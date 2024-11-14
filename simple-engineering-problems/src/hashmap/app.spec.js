const HashMap = require('./HashMap');

describe('HashMap', () => {
    let map;

    beforeEach(() => {
        map = new HashMap();
    });

    test('should store and retrieve food items by key', () => {
        map.put('breakfast', 'pancakes');
        expect(map.get('breakfast')).toBe('pancakes');
    });

    test('should return undefined for missing drink', () => {
        expect(map.get('juice')).toBeUndefined();
    });

    test('should check if a food item exists', () => {
        map.put('lunch', 'sandwich');
        expect(map.has('lunch')).toBe(true);
        expect(map.has('dinner')).toBe(false);
    });

    test('should remove a drink item', () => {
        map.put('drink', 'coffee');
        map.delete('drink');
        expect(map.has('drink')).toBe(false);
    });

    test('should clear all food and drink items', () => {
        map.put('snack', 'apple');
        map.put('drink', 'water');
        map.clear();
        expect(map.size()).toBe(0);
    });

    test('should return the correct size for multiple items', () => {
        map.put('breakfast', 'pancakes');
        map.put('dinner', 'pizza');
        expect(map.size()).toBe(2);
    });
});
