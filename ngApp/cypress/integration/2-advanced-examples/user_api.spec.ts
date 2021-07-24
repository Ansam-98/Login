import { isTypedArray } from "cypress/types/lodash"

describe('User Api test',() =>{
    it('GET-list user',() =>{
        cy.request('http://localhost:3000/api/users')
    
        .then((res) =>{
            expect(res).to.have.property("status",200)
          expect(res.body).to.not.be.null
          expect(res.body).to.have.length(10)

         }) 
        })
 it('POST-Creat User',() =>{
     const item = {"appname": "kareem",
     "email": "kareem@gmail.com",
     "title": "Amman",
     "password": "ka1234",
     "experiance": "one",}
    cy.request('POST','http://localhost:3000/api/register',item)
    .its('body')
  
 
 })




    })
