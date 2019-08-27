# Reservation Project

## Route New Reservation:
localhost:5000/api/reservationss
### data:
{
	"name":"Asad Ahmed",
	"email":"asadahmed6345@gmail.com",
	"roomtype":"Single",
	"arrivaldate":"03-03-2019",
	"depraturedate":"03-03-2019",
	"numberofguests":"1",
	"freepickup":true,
	"flightnumber":"1",
	"specialrequest":"Something different"
	
}

# get Single person data
## route:localhost:5000/api/getonereservation

### data:
{
 "id": "5d65683632d1f33754dde016"
	
}

# get data for all reservations:
## route:localhost:5000/api/getall


# delete one user
## route:localhost:5000/api/deletereservation

### data:
{
	"id": "5d5d85bb454b7d13f4e8c94a"
}
# update user data
## route:routelocalhost:5000/api/updatereservation

### data: 
{
	"id": "5d5e610da6db972e684f3a56",
	"reserve":{
		        "name": "Asad",
        "email": "asad@yopmail.com",
        "flightnumber": "45387A21",
        "freepickup": true,
        "roomtype": "Family"
	}
}