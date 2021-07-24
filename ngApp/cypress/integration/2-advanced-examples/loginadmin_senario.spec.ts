describe(' Login Demo',function(){
    it('login senerio',function(){
cy.visit('http://localhost:4200/admin')
cy.get('.email').type('ansam.hiary@gmail.com')
cy.get('.password').type('12345')
cy.get('.post-admin').click()
    })
})