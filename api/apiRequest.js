import dotenv from 'dotenv'; // biblioteca para variável ambiente
import { GoogleGenerativeAI } from  '@google/generative-ai'; // importa a api

// carrega as variáveis ambiente
dotenv.config();

export default async function handler(req, res){
    console.log("Requisição recebida:", req.method);
    // verifico se meu método de request é post
    if (req.method === "POST") {
        try {
            console.log("Input recebido:", input);
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
            console.log("Resultado da API:", result);
            // const response = result.response;

            const responseText = result?.response?.text ? result.response.text() : result?.response;

            // Verifica se a resposta foi gerada corretamente
            if (!responseText) {
                return res.status(500).json({ message: "Não foi possível gerar a resposta." });
            }
    
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

console.log(handler({
    // método POST, usado para enviar dados
    method: "POST",
    // indica ao corpo da requisição que formato é JSON
    headers: {
        "Content-Type": "application/json",
    },
    // envia o valor como JSON
    body: JSON.stringify({ input: 'olá' }), 
}));