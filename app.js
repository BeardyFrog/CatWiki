function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value
    // Se o campoPesquisa fora uma string vazia
    if (campoPesquisa == ""){
      section.innerHTML = "<p>Nada foi encontrado</p>"  
       return
    }
    //Transforma o campo de pesquisa em minuscula
    campoPesquisa = campoPesquisa.toLowerCase()

    // Itera sobre os dados da pesquisa e cria o HTML para cada resultado
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
    // Se o titulo coincidir com o campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        
            resultados += `
            <div class="item-resultado">
            <h2>${dado.titulo}</h2> <p class="descricao-meta">
            ${dado.descricao} </p>
            <a href=${dado.link} target="_blank">Saiba mais</a> 
            </div>
      `;

      }
        if (!resultados){
          resultados = "<p>Nada foi encontrado. </p>"
        }   
    }
  
    // Atualiza o conteúdo da seção com os resultados da pesquisa
    section.innerHTML = resultados;
    
  }