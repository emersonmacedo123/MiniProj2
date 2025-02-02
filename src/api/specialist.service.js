import API_URL from './config.js'

export const specialistService = {
    async getSpecialists(token) {
        const response = await fetch(`${API_URL}/specialists`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }
        });
        if (response.ok) {
            return await response.json();
        } else {
            throw Error(handleResponses(response.status));
        }
    },

    async addSpecialist(token, payload) {
        const response = await fetch(`${API_URL}/specialists`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify(payload)
        })
        if (response.ok) {
            return await response.json();
        } else {
            throw Error(handleResponses(response.status));
        }
    },

    async editSpecialist(token, payload) {
        const response = await fetch(`${API_URL}/specialists/${payload._id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify(payload)
        });
        if (response.ok) {
            return await response.json();
        } else {
            throw Error(handleResponses(response.status));
        }
    },

    async removeSpecialist(token, id) {
        const response = await fetch(`${API_URL}/specialists/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }
        });
        if (response.ok) {
            return await response.json();
        } else {
            throw Error(handleResponses(response.status));
        }
    }

};

function handleResponses(code) {
    let message = ""
    switch (code) {
        case 401:
            message = "Não está autorizado a executar esta ação!"
            break;
        case 406:
            message = "Ação não aceitável. Verifique se preencheu bem todos os campos!"
            break;
        case 409:
            message = "Já existe um utilizador com este username!"
            break;
        default:
            message = "Mensagem desconhecida"
            break;
    }
    return message
}

export default specialistService;