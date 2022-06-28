import 'cypress-wait-until';

class ServicesPage {

    token() {
        const body = cy.request({
            method: 'POST',
            url: 'http://172.16.17.244:2010/Auth/login',
            headers: {
              'Content-Type': 'application/json'
            },
            body: {       
              "Username": "admin",
              "Password": "admin",
            }
          })
          .then((response) => {
        cy.log(response.body.token)
        window.localStorage.setItem('authce9d77b308c149d5992a80073637e4d5', response.body.token)
    })
    }

    validationService(service) {
        cy.login();
        const token = Cypress.env('token')
        cy.log("token: " + token)
        const authorization = `bearer ${ token }`
        const options = {
            method: 'GET',
            url: `http://172.16.17.244:2032/${ service }/List`,
            headers: {
                authorization,
              }
        }
        cy.request(options).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("TotalCount: " + response.body.TotalCount)
        })
    }


  validationStatusAgent(value) {
    var valueResponse
    cy.login();
    const token = Cypress.env('token');
    cy.log("token: " + token)
    const authorization = `bearer ${token}`;
    const options = {
      method: 'GET',
      url: `http://172.16.17.244:2032/Agent/List?Name=${value}`,
      headers: {
        authorization,
      }
    }

    cy.responseName(options)
    /*
    return new Promise((resolve, reject) => {
      cy.request(options).then((response) => {
        expect(response.status).to.eq(200)
        cy.log("Value: " + response.body.Items[0].AgentStatusName)
        valueResponse = response.body.Items[0].AgentStatusName
           resolve(valueResponse)
        })
      
    })
    */
  }

    
}

export default new ServicesPage