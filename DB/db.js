const data = "POS"; // local storage saved key
const data_item = "ITEM"; // local storage saved key

export function saveCustomerDB(new_customer) {
    let pre_data = localStorage.getItem(data);
    let data_arr = [];
    // undefine/ null/ "" / false
    if (pre_data) {
        data_arr = JSON.parse(pre_data);
    }
    data_arr.push(new_customer);
    localStorage.setItem(data, JSON.stringify(data_arr));
}

export function saveItemDB(new_item) {
    let pre_data = localStorage.getItem(data_item);
    let data_arr = [];
    // undefine/ null/ "" / false
    if (pre_data) {
        data_arr = JSON.parse(pre_data);
    }
    data_arr.push(new_item);
    localStorage.setItem(data_item, JSON.stringify(data_arr));
}

export function getCustomerDB() {
    let pre_data = localStorage.getItem(data);
    let data_arr = [];
    // undefine/ null/ "" / false
    if (pre_data) {
        data_arr = JSON.parse(pre_data);
    }
    return data_arr;
}

export function getItemDB() {
    let pre_data = localStorage.getItem(data_item);
    let data_arr = [];
    // undefine/ null/ "" / false
    if (pre_data) {
        data_arr = JSON.parse(pre_data);
    }
    return data_arr;
}

export function updateCustomerDB(id, lname, fname, address){

    let pre_data = localStorage.getItem(data);
    let data_arr = [];
    // undefine/ null/ "" / false
    if (pre_data) {
        data_arr = JSON.parse(pre_data);
    }

    let index = data_arr.findIndex(e => e._customer_id === id);

    if (index > -1) {
        data_arr[index]._customer_id = id;
        data_arr[index]._customer_first_name = lname;
        data_arr[index]._customer_last_name = fname;
        data_arr[index]._customer_address = address;
        localStorage.setItem("POS", JSON.stringify(data_arr));
    }
}

export function updateItemDB(id, name, price, qty){

    let pre_data = localStorage.getItem(data_item);
    let data_arr = [];
    // undefine/ null/ "" / false
    if (pre_data) {
        data_arr = JSON.parse(pre_data);
    }

    let index = data_arr.findIndex(e => e._item_code === id);

    if (index > -1) {
        data_arr[index]._item_code = id;
        data_arr[index]._item_name = name;
        data_arr[index]._item_price = price;
        data_arr[index]._item_qty = qty;
        localStorage.setItem(data_item, JSON.stringify(data_arr));
    }
}

export function deleteCustomerDB(id) {
    let pre_data = localStorage.getItem(data);
    let data_arr = [];

    if (pre_data) {
        data_arr = JSON.parse(pre_data);
    }

    let index = data_arr.findIndex(e => e._customer_id === id);
    console.log(index);

    if (index > -1) {
        data_arr.splice(index,1);
        localStorage.setItem("POS", JSON.stringify(data_arr));
    }
}

export function deleteItemDB(id) {
    let pre_data = localStorage.getItem(data_item);
    let data_arr = [];

    if (pre_data) {
        data_arr = JSON.parse(pre_data);
    }

    let index = data_arr.findIndex(e => e._item_code === id);
    console.log(index);

    if (index > -1) {
        data_arr.splice(index,1);
        localStorage.setItem(data_item, JSON.stringify(data_arr));
    }
}