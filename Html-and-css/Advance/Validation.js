
console.log("Lodaing Validation scripts...!")

class isPhoneNumber_valid {
    constructor(form) {
        this.form = form;
        Object.assign(this, form)
    }

    get_type() {
        return this.form.type;
    }

    get_name() {
        return this.form.name;
    }

    get_pattern() {

        if (this.form.pattern != "") {
            return this.form.pattern;
        }
        else {
            return false;
        }
    }
}

class Forms {

    constructor(form) {
        this.form = form;
        Object.assign(this, form)
    }

    get_type() {
        return this.froms.attributes.type;
    }

    get_name() {
        return this.froms.attributes.name;
    }

    get_pattern() {

        if (this.form.pattern != "") {
            return this.form.pattern
        }
        else {
            return False
        }
    }

}