import {transform} from "../src/romanizer";

describe('romanizer', () => {
    it('should return X when input 10', () => {
        console.log(transform(10));
        const formatted = transform(10);

        expect(formatted).toEqual('X');
    });
});