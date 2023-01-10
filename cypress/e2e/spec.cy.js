const username = ''
const password = ''
describe('Data', function() {
    beforeEach(() => {
        cy.fixture('example').then(function(data) {
            this.data=data
            console.log(this.data)
            cy.visit('/')
            cy.title().should('include', 'WorldTicke')
            cy.get('[class="fas fa-user-circle"]', { timeout: 10000 }).click({ multiple: true })
            cy.contains('h2', 'Registered customers')
            cy.get('input[name=username]').type(this.data.username)
            cy.get('[id="password"]').type(this.data.password)
            cy.get('[class="button"]', { timeout: 10000 }).contains('Log in').click({ multiple: true })
        })
    })
    it('CheckProfile', function() {
            cy.get('[class="hello"]').should('include.text', 'Junior Tester');
            cy.get('#account_edit > a').contains('Account Information').click({ multiple: true })
            cy.get('[id="email"]').should('have.value', this.data.username)


    })
    it('GetActiveBooking', function() {
        cy.get('#flight_booking > a').contains('Active Booking').click({ multiple: true })
    })

})