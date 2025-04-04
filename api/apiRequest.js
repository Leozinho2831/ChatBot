import dotenv from 'dotenv'; // biblioteca para variável ambiente
import { GoogleGenerativeAI } from  '@google/generative-ai'; // importa a api

// carrega as variáveis ambiente
dotenv.config();

let historyUser = [];

export default async function apiRequestIA(req, res){
    // verifico se meu método de request é post
    if (req.method === "POST") {
        try {
            // desestrutura o 'input' do corpo da requisição
            const { input, context } = req.body;
    
            // verifica se o input foi enviado
            if(!input){    
                return res.status(400).json({ message: "Faltando o texto de entrada." });
            }
    
            const genIA = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
            const model = genIA.getGenerativeModel({ model: 'gemini-2.0-flash'});  
            
            historyUser.push({ tipo: 'user', messageUser: input});
            let prompt;

            if(context){
                if(context == 'text'){
                    prompt = `Histórico da conversa:\n`;
                    historyUser.forEach(item => {
                        prompt += `${item.tipo === 'user' ? 'User' : 'IA'}: ${messageUser}\n`;
                    });
                    // cria o prompt com quebra de linhas
                    // prompt = `Reescreva o seguinte texto garantindo que as quebras de linha e as partes em negrito sejam preservadas corretamente. Use "\n" para representar as quebras de linha no texto formatado e ** para as partes em negrito. Apenas o texto formatado, sem explicações.\n\n${prompt}`;
                    prompt += `Responda completamente e preserve quebras de linha ("\n") e negrito ("**") quando for textos grandes e explicativos para o usuário compreender melhor, sem explicações de formatação. Siga também, se o usuário não mudar o tema, o contexto que há no prompt\n\n${prompt}`;
                } else if(context == 'resume'){
                    // cria um prompt para o histórico de conversas
                    prompt = `Crie um título curto e direto, com no máximo 2 palavras, que capture a essência do seguinte texto para ser usado em uma lista de "Recentes". Foque no tópico principal do texto. Retorne apenas o título, sem explicações ou variações.\n\n"${input}"`;
                }
            }

            
            
            // gera a resposta com texto da entrada
            const result = await model.generateContent(prompt);
            
            const response = result.response;        
            
            // envia a resposta da IA de volta ao frontend        
            res.status(200).json({ message: response.text() });
        } catch (error) {
            console.error("Erro na requisição para a IA:", error);
            res.status(500).json({ error: "Erro interno do servidor" });
        }
    } else { 
        return res.status(405).json({ message: "Método não permitido" });
    }
}
