import {Customer} from "../model/Customer.js";
import {saveCustomerDB, getCustomerDB, updateCustomerDB, deleteCustomerDB} from "../DB/db.js";

let isValid = "";

export class CustomerController {
    constructor() {
        $('#btn_add').click(this.handleSaveCustomer.bind(this));
        $('#btn_update').click(this.handleUpdateCustomer.bind(this));
        $('#btn_delete').click(this.handleDeleteCustomer.bind(this));
        this.handleLoadCustomers();
    }


    handleValidation() {
        var customer_id = $('#customer_id').val();
        var customer_first_name = $('#first_name').val();
        var customer_last_name = $('#last_name').val();
        var customer_address = $('#customer_address').val();
        const regexNumber = /^\d+$/;
        // if (!regexNumber.test(customer_id)) {
        //     alert('Invalid Id')
        // } else if (!customer_first_name) {
        //     alert('Invalid First Name');
        // } else if (!customer_last_name) {
        //     alert('Invalid Last Name');
        // } else if (!customer_address) {
        //     alert('Invalid Address');
        // } else {
        //     this.handleSaveCustomer();
        // }

        !regexNumber.test(customer_id) ?
            alert('Invalid Id') :
            (!customer_first_name) ?
                alert('Invalid First Name') :
                (!customer_last_name) ?
                    alert('Invalid Last Name') :
                    (!customer_address) ?
                        alert('Invalid Address') :
                        isValid = "true";

    }



    handleSaveCustomer() {

        this.handleValidation();

        if (isValid === "true"){
            var customer_id = $('#customer_id').val();
            var customer_first_name = $('#first_name').val();
            var customer_last_name = $('#last_name').val();
            var customer_address = $('#customer_address').val();

            let new_customer = new Customer(
                customer_id,
                customer_first_name,
                customer_last_name,
                customer_address
            );

            saveCustomerDB(new_customer);

            this.handleLoadCustomers();

            isValid = "";
        }

    }

    handleLoadCustomers() {
        // let pre_data = localStorage.getItem(data);
        // let customer_data_arr = JSON.parse(pre_data);
        let customer_data_arr = getCustomerDB();

        $('#c_body').empty();

        customer_data_arr.map((result, index) => {
            var row = "<tr class='row-data'>" +
                "<td>" + result._customer_id + "</td>" +
                "<td>" + result._customer_first_name + "</td>" +
                "<td>" + result._customer_last_name + "</td>" +
                "<td>" + result._customer_address + "</td>" +
                "</tr>";
            $('#c_body').append(row);
        })
    }

    handleUpdateCustomer() {

        this.handleValidation();

        if (isValid === "true"){
            let customer_id = $('#customer_id').val();
            let customer_first_name = $('#first_name').val();
            let customer_last_name = $('#last_name').val();
            let customer_address = $('#customer_address').val();

            updateCustomerDB(customer_id, customer_first_name, customer_last_name, customer_address );

            this.handleLoadCustomers();

            isValid = "";
        }
    }

    handleDeleteCustomer() {
        this.handleValidation();

        if (isValid === "true"){
            let customer_id = $('#customer_id').val();


            deleteCustomerDB(customer_id);

            this.handleLoadCustomers();

            isValid = "";
        }
    }

}

new CustomerController();

// -------------------------------------

// data select event
$('tbody').on('click', '.row-data', (event) => {
    console.log($(event.target).closest('tr').find('td').eq(0).text());
    console.log($(event.target).closest('tr').find('td').eq(1).text());
    console.log($(event.target).closest('tr').find('td').eq(2).text());
    console.log($(event.target).closest('tr').find('td').eq(3).text());
    console.log($(event.target.parentNode).find('td').eq(0).text());

    let customer_id = $(event.target).closest('tr').find('td').eq(0).text()
    let customer_fname = $(event.target).closest('tr').find('td').eq(1).text()
    let customer_lname = $(event.target).closest('tr').find('td').eq(2).text()
    let customer_address = $(event.target).closest('tr').find('td').eq(3).text()

    $('#customer_id').val(customer_id);
    $('#first_name').val(customer_fname);
    $('#last_name').val(customer_lname);
    $('#customer_address').val(customer_address);
})

// $('tbody').on('click', '.row-data', function(event) {
//     console.log($(this).find('td').eq(0).text());
//     console.log($(this).find('td').eq(1).text());
//     console.log($(this).find('td').eq(2).text());
//     console.log($(this).find('td').eq(3).text());
// })

// $('#btn_update').on('click', (event) => {
//     let customer_id = $('#customer_id').val();
//     let pre_data = localStorage.getItem(data);
//     let customer_data_arr = JSON.parse(pre_data);
//     let index = customer_data_arr.findIndex(e => e.customer_id  ===  customer_id);
//     if(index>-1) {
//         console.log(customer_data_arr[index]);
//         customer_data_arr[index].id = $('#customer_id').val();
//         customer_data_arr[index].customer_first_name = $('#first_name').val();
//         customer_data_arr[index].customer_last_name = $('#first_name').val();
//         customer_data_arr[index].customer_address = $('#customer_address').val();
//         localStorage.setItem(data, JSON.stringify(customer_data_arr));
//         loadData();
//     }
// })

// // data load function
// function loadData() {
//     let pre_data = localStorage.getItem(data);
//     let customer_data_arr = JSON.parse(pre_data);
//
//     $('tbody').empty();
//
//     customer_data_arr.map((result, index) => {
//         var row = "<tr class='row-data'>" +
//             "<td>"+ result.customer_id +"</td>" +
//             "<td>"+ result.customer_first_name +"</td>" +
//             "<td>"+ result.customer_last_name +"</td>" +
//             "<td>"+ result.customer_address +"</td>" +
//             "</tr>";
//         $('tbody').append(row);
//     })
// }

// $('#btn_add').click(function () {
//
//     console.log('clicked');
//
//     var customer_id = $('#customer_id').val();
//     var customer_first_name = $('#first_name').val();
//     var customer_last_name = $('#last_name').val();
//     var customer_address =  $('#customer_address').val();
//
//     let pre_data = localStorage.getItem(data);
//     let data_arr = [];
//
//     // undefine/ null/ "" / false
//     if(pre_data) {
//         data_arr = JSON.parse(pre_data);
//     }
//
//     var obj = {
//         customer_id: customer_id,
//         customer_first_name: customer_first_name,
//         customer_last_name: customer_last_name,
//         customer_address: customer_address
//     }
//
//     let new_customer = new Customer(customer_id, customer_first_name, customer_last_name, customer_address);
//     console.log(new_customer);
//     data_arr.push(obj);
//     console.log(data_arr);
//     localStorage.setItem(data, JSON.stringify(data_arr));
//
//     // loadData();
//
// })


// loadData();