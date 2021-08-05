class Owner {
    constructor(name, address, phone){
        this._name = name
        this._address = address
        this._phone = phone
    }
    dataOwner(){
        let showData = document.getElementById('resultado')
        showData.innerHTML = `<ul><li>El nombre de/la dueña es: ${this._name}. Su domicilio es: ${this._address} y su número telefónico de contacto: ${this._phone}</li>
        <li>El tipo de animal es un: ${this.type}, mientras que el nombre de la mascota es: ${this._petName} y la enfermedad es: ${this.illness}</li></ul>`
    }
}
class Animal extends Owner {
    constructor(name, address, phone, type){
        super(name, address, phone)
        let _type = type
        this.getType = () => _type;
    }
    get type(){
        return this.getType()
    } 
}
class Mascot extends Animal {
    constructor(name, address, phone, type, petName, illness){
        super(name, address, phone, type)
        let _petName = petName
        let _illness = illness
        this.getPetName = () => _petName
        this.setPetName = (new_petName) => _petName = new_petName 
        this.getIllness = () => _illness
        this.setIllness = (new_illness) => _illness = new_illness
    }
    get _petName(){
        return this.getPetName()
    }
    set _petName(new_petName){
        this.setPetName(new_petName)
    }
    get illness(){
        return this.getIllness()
    }
    set illness(new_illness){
        this.setIllness(new_illness)
    }
}

let register = document.getElementById('register')
register.addEventListener('click', (event) => {
    
    event.preventDefault();
    let pet = catchData();
    pet.dataOwner();
    clearFields();
})

function catchData() {
    let name = document.getElementById('propietario').value
    let phone = document.getElementById('telefono').value
    let address = document.getElementById('direccion').value
    let petName = document.getElementById('nombreMascota').value
    let type = document.getElementById('tipo').value
    let illness = document.getElementById('enfermedad').value

    if (type == "perro"){
        return perro = new Mascot(name, address, phone, type, petName, illness)
    } else if (type == "gato"){
        return gato = new Mascot(name, address, phone, type, petName, illness)
    } else {
        return conejo = new Mascot(name, address, phone, type, petName, illness)
    }
}
function clearFields(){
    document.getElementById('propietario').value = ''
    document.getElementById('telefono').value = ''
    document.getElementById('direccion').value = ''
    document.getElementById('nombreMascota').value = ''
    document.getElementById('enfermedad').value = ''
}