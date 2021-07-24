describe('Register Demo',function(){
    it('login senerio',function(){
cy.visit('http://localhost:4200/login')
cy.get('.post-user').click()
cy.get('.appname').type('Ansam')
cy.get('.email').type('ansam.hiary@gmail.com')
cy.get('.password').type('147852')
cy.get('.title').type('As-Salt')
cy.get('.select').type('Femal')
cy.get('.exp').type('one')
cy.get('.post-user').click()
    })
})