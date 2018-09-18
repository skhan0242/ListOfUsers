import listReducers from "./reducers";

describe('User List Reducer', () =>{
    it('should handle initial state' , () =>{
        expect(listReducers(undefined, {})
    ).toEqual(
        {
            items:[]
        }
    )
    })
})