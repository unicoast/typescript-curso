(() => {
    
    interface Client {
        name: string;
        age?: number;
        address: Address;
        // una interface no implementa lógica de negocio, pero sí puede definir la firma de un método, es decir, qué parámetros recibe y qué tipo de dato devuelve
        getFullAddress(id: string): string;
    }
    
    // Cuando la interfaz tiene más de un nivel, es recomendable crear una nueva interfaz para cada nivel, así el código es más legible y fácil de mantener
    interface Address {
        id: number;
        zip: string;
        city: string;
    }
    
    const client: Client = {
        name: 'Nicolás',
        age: 25,
        address: {
            id: 125,
            zip: 'MZD 323',
            city: 'Miami'
        },
        getFullAddress(id: string) {
            return this.address.city;
        }
    }
    
    const client2: Client = {
        name: 'Novak',
        age: 38,
        address: {
            id: 130,
            zip: '10001',
            city: 'New York'
        },
         getFullAddress(id: string) {
            return this.address.city;
        }
    }
    
    
})()
