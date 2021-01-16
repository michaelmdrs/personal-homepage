(() =>  {

    this.name = 'Nome de criação'
    
    const getNameArrowFn = () => this.name
    
    function getName() {
        return this.name
    }
    
    const user ={
        name: 'Nome de objeto de execução',
        getNameArrowFn,
        getName
    }
    
    console.log(user.getNameArrowFn())
    console.log(user.getName())
})();