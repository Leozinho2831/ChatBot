import dotenv from 'dotenv'; // biblioteca para variável ambiente
import { GoogleGenerativeAI } from  '@google/generative-ai'; // importa a api

// carrega as variáveis ambiente
dotenv.config();

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
            
            let prompt = input;

            // cria um prompt para o histórico de conversas
            if(context && context == 'resume'){
                prompt = `Você receberá um texto e sua tarefa é gerar um título curto e impactante que simbolize o tema principal do conteúdo. O título deve ter de 2 a 3 palavras, ser direto e representativo. Evite palavras genéricas ou muito abstratas. Mantenha a clareza e a relevância:\n"${input}"`;
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
