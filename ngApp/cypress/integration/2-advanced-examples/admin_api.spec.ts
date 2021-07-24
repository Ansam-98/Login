describe('User Api test',() =>{
it('GET-list admin',() =>{
    cy.request('http://localhost:3000/api/admin')

    .then((res) =>{
        expect(res).to.have.property("status",200)
      expect(res.body).to.not.be.null
      expect(res.body).to.have.length(3)

     }) 
    })


     it('POST-Creat Admin',() =>{
        const item = {"email": "Amal@gmail.com",
        "password": "Am1234",}
       cy.request('POST','http://localhost:3000/api/registeradmin',item)
       .its('body')
    })
})