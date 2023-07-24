describe('API Test', () => {

  //This request add data which is mentioned in the body of the request
  it('POST request', () => {
  
  cy.request({method: 'POST', url: 'https://reqres.in/api/users', body: {
  "name": "Junaid",
  "job": "Team lead"
  }}).then((response) =>{
    
  //Asserting the status code to be 201 for successful execution
  expect(response.status).to.eq(201)
  //Asserting the name which we have inserted into
  expect(response.body.name).to.eq("Junaid")
  //Asserting the status to confirm whether it is created
  expect(response.statusText).to.eq("Created")
  })
  })
  
  //This request will execute PUT request
  it('PUT request', () => {
  
  cy.request({method: 'PUT', url: 'https://reqres.in/api/users/2', body: {
  "name": "ALi",
  "job": "Resident"
  }}).then((response) =>{
  //Asserting the status code to be 200 for successful execution
  expect(response.status).to.eq(200)
  //Asserting the name which we have inserted into
  expect(response.body.name).to.eq("Ali")
  })
  })
  
  //This request will execute the PATCH request and update the record
  it('PATCH request', () => {
  
  cy.request({method: 'PATCH', url: 'https://reqres.in/api/users/2', body: {
  "name": "Ali",
  "job": "Resident"
  }}).then((response) =>{
  //Asserting the status code to be 200 for successful execution
  expect(response.status).to.eq(200)
  //Asserting the name which we have inserted into
  expect(response.body.name).to.eq("Ali")
  })
  })
  
  //This request will delete the user which exist
  it('DELETE request', () => {
  
  cy.request({method: 'DELETE', url: 'https://reqres.in/api/users/2'}).then((response) =>{
  //Asserting the status code to be 204 for successful execution
  expect(response.status).to.eq(204)
  })
  })
  })