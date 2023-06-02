function inicio()
	{
		let 
			codigoVoto,
			votosTotais = 0, 
			votosCandidato1 = 0, 
			votosCandidato2 = 0, 
			votosCandidato3 = 0,
			votosBranco = 0, 
			votosNulo = 0,
			votosTotaisGanhador = 0
		
		let 
			percentualVotosCandidato1 = 0.0, 
			percentualVotosCandidato2 = 0.0,
			percentualVotosCandidato3 = 0.0,
			percentualVotosBranco = 0.0,
			percentualVotosNulo = 0.0,
			percentualGanhador = 0.0
		
		let
			nomeCandidato1 = "Name 1",
			nomeCandidato2 = "Name 2",
			nomeCandidato3 = "Name 3",
			nomeGanhador = ""
			
		let
			opcaoInvalida = false
			
		// Laço responsável pela votação
		 {
			
			console.clear()
			
			if (opcaoInvalida) {
				console.log("** Opção inválida! \n\n")
				opcaoInvalida = false
			}
			
			console.log("** Opções de voto: \n\n")
			console.log("1 | ", nomeCandidato1, "\n")
			console.log("2 | ", nomeCandidato2, "\n")
			console.log("3 | ", nomeCandidato3, "\n")
			console.log("5 | Voto em branco \n")
			console.log("8 | Voto nulo \n")
			console.log("0 | Encerrar a votação \n\n")
	
			console.log(">> Digite agora o código do seu voto: ")
			prompt(codigoVoto)
	
			prompt(codigoVoto) {
				
				case 0;
					break
				
				case 1;
					votosCandidato1++
					votosTotais++
					break
				
				case 2;
					votosCandidato2++
					votosTotais++
					break
				
				case 3;
					votosCandidato3++
					votosTotais++
					break
				
				case 5;
					votosBranco++
					votosTotais++
					break
				
				case 8;
					votosNulo++
					votosTotais++
					break
				
				case default;
					opcaoInvalida = true
			}
			
		} while (codigoVoto != 0)

		
		// determinar o ganhador, sem situação de empate
		if (votosCandidato1 > votosCandidato2 e votosCandidato1 > votosCandidato3) 
		{	
			nomeGanhador = nomeCandidato1
			votosTotaisGanhador = votosCandidato1 + votosBranco
		} 
		
		if (votosCandidato2 > votosCandidato1 e votosCandidato2 > votosCandidato3) 
		{	
			nomeGanhador = nomeCandidato2
			votosTotaisGanhador = votosCandidato2 + votosBranco
		} 
		
		if (votosCandidato3 > votosCandidato1 e votosCandidato3 > votosCandidato2)
		{
			nomeGanhador = nomeCandidato3
			votosTotaisGanhador = votosCandidato3 + votosBranco
		} 
		
		console.clear()
		console.log("** Resultado da apuração desta urna\n\n")
		
		// Esta condição evita a divisão por 0 caso a votação seja encerrada sem nenhum voto
		if (votosTotais != 0) {
			
			percentualGanhador = ((votosTotaisGanhador) / (votosTotais)) * 100.0
		
			console.log("Votos totais: ", votosTotais, "\n")
			
			console.log("Votos no candidato ",nomeCandidato1, ": ", votosCandidato1, " (", 
				(votosCandidato1) / (votosTotais) * 100.0, "%)\n")
			
			console.log("Votos no candidato ",nomeCandidato2, ": ", votosCandidato2, " (", 
				(votosCandidato2) / (votosTotais) * 100.0, "%)\n")
			
			console.log("Votos no candidato ",nomeCandidato3, ": ", votosCandidato3, " (", 
				(votosCandidato3) / (votosTotais) * 100.0, "%)\n")
			
			console.log("Votos em branco: ", votosBranco, " (", 
				(votosBranco) / (votosTotais) * 100.0, "%)\n")
			
			console.log("Votos nulos: ", votosNulo, " (", 
				(votosNulo) / (votosTotais) * 100.0, "%)\n\n")
				
		} else if 
			
			console.log("** Nenhum voto registrado\n")
			
		}

		
		console.log("** Ganhador nesta urna\n\n")
		console.log(nomeGanhador, " com ", votosTotaisGanhador, " votos (", 
			percentualGanhador, "%) somados os votos em branco\n")
		
	}
}

function audioConfirmacao() {
    const audio = new Audio("./confirma-urna.mp3")
    audio.play();

}