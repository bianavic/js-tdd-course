/* describe('Main', function () {
  describe('Method A', function () {
    context('Caso 1', function () {
      it('Should happen X', function () {
        // espera que aconteca === de fato o teste
        // entra de dados ou método / metodo sum(2,2)
        // estera retornar / (4) ==> true | (3) => false broken test
      })
    })

    context('Caso 2', function () {

    })
  })

  describe('Method B', function () {

  })
}) */

/* describe('Main', function () {
  // roda uma vez, antes do bloco
  before(function () {
    console.log('before')
  })
  // roda uma vez, depois do bloco
  after(function () {
    console.log('after')
  })
  // roda todas as vezes antes de cada bloco
  beforeEach(function () {
    console.log('beforeEach')
  })
  // roda todas as vezes, depois de cada bloco
  afterEach(function () {
    console.log('afterEach')
  })
  it('test 1', function () {
    console.log('teste 1')
  })
  it('test 2', function () {
    console.log('teste 2')
  })
}) */

describe('Main', function () {
  var arr

  // roda uma vez, antes do bloco
  before(function () {
    // inicia uma conexão no banco
    // criar um conjunto de dados

  })
  // roda uma vez, depois do bloco
  after(function () {
    // fecha uma conexão no banco
    // apagar esse conjunto de dados
  })
  // roda todas as vezes antes de cada bloco
  beforeEach(function () {
    arr = [1, 2, 3]
  })
  // roda todas as vezes, depois de cada bloco
  afterEach(function () {
  })

  it('should have a size of 4 when push another value to the array', function () {
    arr.push(4)
    console.log(arr.length) // 4
  })
  it('should have a size of 2 when pop a value from the array', function () {
    console.log(arr)
    arr.pop()
    console.log(arr.length) // 4
  })
  it('should remove the value 3 when use pop in the array', function() {
    console.log(arr.pop() ===3) // true
  })
})

var expect = require('chai').expect;

describe('Main', function() {
  var arr


  before(function() {
  })

  after(function() {
  })

  beforeEach(function() {
    arr = [1,2,3]
  })

  afterEach(function() {
  })

  // testar tipos ou se existe (smoke test)
  it('should be a array', function() {
    expect(arr).to.be.a('array')
  })

  it('should have a size of 4 when push another value to the array', function() {
    arr.push(4)
    expect(arr).to.have.lengthOf(4)
  })

  it('should remove the value 3 when use pop in the array', function(){
    arr.pop() // true
    expect(arr).to.not.include(3)
  })

  it('should have a size of 2 when pop a value from the array', function() {
    arr.pop()
    expect(arr).to.have.length(2)
  })

})

// before
// beforeEach
// test 1
// afterEach
// beforeEach
// test 2
// afterEach
// after
