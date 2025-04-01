// biblioteca para variável ambiente
import dotenv from 'dotenv';
// importa a api
import { GoogleGenerativeAI } from  '@google/generative-ai';

// carrega as variáveis ambiente
dotenv.config();

export default async function handler(req, res){
    // verifico se meu método de request é post
    if (req.method === "POST") {
        try {
            // desestrutura o 'input' do corpo da requisição
            const { input } = req.body;
    
            // verifica se o input foi enviado
            if(!input){
                return res.status(400).json({ message: "Faltando o texto de entrada." });
            }
    
            const genIA = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
            const model = genIA.getGenerativeModel({ model: 'gemini-2.0-flash'});
    
            // gera a resposta com texto da entrada
            const result = await model.generateContent(input);
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