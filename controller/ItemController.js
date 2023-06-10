import {Item} from "../model/Item.js";
import {saveItemDB, getItemDB, updateItemDB, deleteItemDB} from "../DB/db.js";

let isValid = "";

export class ItemController {
    constructor() {
        $('#btn_item').click(this.handleSaveItem.bind(this));
        $('#btn_update_item').click(this.handleUpdateItem.bind(this));
        $('#btn_delete_item').click(this.handleDeleteItem.bind(this));
        this.handleLoadItems();
    }


    handleValidation() {
        var item_code = $('#item_code').val();
        var item_name = $('#item_name').val();
        var item_price = $('#item_price').val();
        var item_qty = $('#item_qty').val();
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

        !regexNumber.test(item_code) ?
            alert('Invalid code') :
            (!item_name) ?
                alert('Invalid Name') :
                (!item_price) ?
                    alert('Invalid price') :
                    (!item_qty) ?
                        alert('Invalid qty') :
                        isValid = "true";

    }



    handleSaveItem() {

        this.handleValidation();

        if (isValid === "true"){
            var item_code = $('#item_code').val();
            var item_name = $('#item_name').val();
            var item_price = $('#item_price').val();
            var item_qty = $('#item_qty').val();

            let new_item = new Item(
                item_code,
                item_name,
                item_price,
                item_qty
            );

            saveItemDB(new_item);

            this.handleLoadItems();

            isValid = "";
        }

    }

    handleLoadItems() {
        // let pre_data = localStorage.getItem(data);
        // let customer_data_arr = JSON.parse(pre_data);
        let item_data_arr = getItemDB();

        $('#i_body').empty();

        item_data_arr.map((result, index) => {
            var row = "<tr class='row-item-data'>" +
                "<td>" + result._item_code + "</td>" +
                "<td>" + result._item_name + "</td>" +
                "<td>" + result._item_price + "</td>" +
                "<td>" + result._item_qty + "</td>" +
                "</tr>";
            $('#i_body').append(row);
        })
    }


    handleUpdateItem() {

        this.handleValidation();

        if (isValid === "true"){
            let item_code = $('#item_code').val();
            let item_name = $('#item_name').val();
            let item_price = $('#item_price').val();
            let item_qty = $('#item_qty').val();

            updateItemDB(item_code, item_name, item_price, item_qty );

            this.handleLoadItems();

            isValid = "";
        }
    }

    handleDeleteItem() {
        this.handleValidation();

        if (isValid === "true"){
            let item_code = $('#item_code').val();


            deleteItemDB(item_code);

            this.handleLoadItems();

            isValid = "";
        }
    }

}

new ItemController();

// -------------------------------------

// data select event
$('#i_body').on('click', '.row-item-data', (event) => {
    // console.log($(event.target).closest('tr').find('td').eq(0).text());
    // console.log($(event.target).closest('tr').find('td').eq(1).text());
    // console.log($(event.target).closest('tr').find('td').eq(2).text());
    // console.log($(event.target).closest('tr').find('td').eq(3).text());
    // console.log($(event.target.parentNode).find('td').eq(0).text());

    let item_code = $(event.target).closest('tr').find('td').eq(0).text()
    let item_name = $(event.target).closest('tr').find('td').eq(1).text()
    let item_price = $(event.target).closest('tr').find('td').eq(2).text()
    let item_qty = $(event.target).closest('tr').find('td').eq(3).text()

    $('#item_code').val(item_code);
    $('#item_name').val(item_name);
    $('#item_price').val(item_price);
    $('#item_qty').val(item_qty);
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