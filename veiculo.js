function Veiculo(tipoVeiculo, modelo, fabricante, motor) {
    this.tipoVeiculo = tipoVeiculo;
    this.modelo = modelo;
    this.fabricante = fabricante;
    let _motor = motor;

    this.getMotor = function() {
        //return `${this.tipoVeiculo} ${this.modelo} da ${this.fabricante}, velocidade agora é de ${_motor} Km`;
        return _motor;
    }

    this.setMotor = function(valor) {
        if(typeof valor === 'number') {
            _motor = valor;
        }
    }

    this.melhoriaVelocidadeMotor = function() {
        const novoMotor = _motor * 1.3;
        //const novoMotor = _motor;
        _motor = novoMotor;
    }    
}

function Carro(tipoVeiculo, modelo) {
    Veiculo.call(this, tipoVeiculo, modelo, "Honda", 200);

    this.melhoriaVelocidadeMotor = function() {
        const novoMotor = this.getMotor() * 1.25;
        this.setMotor(novoMotor);
    }
}

function Moto(tipoVeiculo, modelo) {
    Veiculo.call(this, tipoVeiculo, modelo, "Yamaha", 300);

    this.melhoriaVelocidadeMotor = function() {
        const novoMotor = this.getMotor() * 1.2;
        this.setMotor(novoMotor);
    }
}

const veiculo1 = new Veiculo("Caminhão", "F1000", "Ford", 400);
const veiculo2 = new Carro("Carro","Civic");
const veiculo3 = new Moto("Moto", "Lander");

veiculo1.melhoriaVelocidadeMotor();
console.log(veiculo1.getMotor());

veiculo2.melhoriaVelocidadeMotor();
console.log(veiculo2.getMotor());

veiculo3.melhoriaVelocidadeMotor();
console.log(veiculo3.getMotor());
