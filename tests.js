// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});


describe('sayHello', function() {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return "Hello, Jane!" when executed', function () {
        expect(sayHello("Jane")).toBe('Hello, Jane!');
    });
    it('should return "Hello, Alex!" when executed', function () {
        expect(sayHello("Alex")).toBe('Hello, Alex!');
    });
    it('should return "Hello, Pat!" when executed', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return "Hello, World!" when executed', function () {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return "Hello, World!" when executed', function () {
        expect(sayHello(false)).toBe("Hello, World!");
    });
});












// describe("add",function() {
//     it('should be defined function', function() {
//         expect(typeof add).toBe('function');
//     });
//     it('should return 5 when adding 3 and 2.', function() {
//         expect(add(3,2)).toBe(5);
//     });
//     it('should return false when adding 2 strings', function() {
//         expect(add("black", "bird")).toBe(false);
//     })
// });