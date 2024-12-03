const print = console.log

const form = document.forms["user-form"]

// inputs: ["first_name", "second_name", "email", "phone"]
function getFormData(formElement, inputs) {
    let formData = {}  // creating an empty object to store the form data

    // loop through each inputElement by id in the inputIds array
    for (let inputId in inputs) {
        let key = formElement[inputId].name
        let value = formElement[inputId].value

        formData[key] = value
    }

    return formData
}


const handleFormSave = (e) => {
    // to prevent the form submission we need to use preventDefault()

    e.preventDefault()
    print("my event: ", e)

    // const form_data = {
    //     first_name: form["first_name"].value,
    //     second_name: form["second_name"].value,
    //     email: form["email"].value,
    //     phone: form["phone"].value
    // }

    // const form_data2 = {
    //     [form["first_name"].name]: form["first_name"].value,
    //     [form["second_name"].name]: form["second_name"].value,
    //     [form["email"].name]: form["email"].value,
    //     [form["phone"].name]: form["phone"].value
    // }

    let form_data = getFormData(form, ["first_name", "second_name", "email", "phone"])

    print("formdata 1", form_data)
    // print("formdata 2", form_data2)
}


form.addEventListener("submit", handleFormSave)