(() => {

    // Principio Singleton
    // Esta clase solo puede tener una única instancia en toda la aplicación.
    // Además, ofrece un punto de acceso "global" a esa única instancia.
    class ConfigGlobal {

        // Esta propiedad estática guardará la única instancia de la clase.
        static instance: ConfigGlobal;

        // El constructor es privado.
        // Eso significa que nadie puede hacer:
        // new ConfigGlobal(...)
        // desde fuera de la clase.
        private constructor(
            public apiUrl: string,
            public modo: 'dev' | 'prod'
        ) {}

        // Método estático que crea la instancia una sola vez
        // o devuelve la ya existente si ya fue creada.
        static getInstance(apiUrl: string, modo: 'dev' | 'prod'): ConfigGlobal {

            // Si todavía no existe una instancia, la crea.
            if (!ConfigGlobal.instance) {
                ConfigGlobal.instance = new ConfigGlobal(apiUrl, modo);
            }

            // Devuelve siempre la misma instancia.
            return ConfigGlobal.instance;
        }

        // Método para modificar el modo de ejecución.
        changeMode(nuevoModo: 'dev' | 'prod'): void {
            this.modo = nuevoModo;
        }
    }

    // Se obtiene la instancia única por primera vez.
    const config1 = ConfigGlobal.getInstance(
        'https://api.miapp.com',
        'dev'
    );

    // Se modifica una propiedad de la instancia.
    config1.changeMode('prod');

    // Aunque aquí se intenta "crear otra",
    // en realidad getInstance() devolverá la misma instancia ya existente.
    const config2 = ConfigGlobal.getInstance(
        'https://otra-api.com',
        'dev'
    );

    // Se imprime la primera referencia.
    console.log(config1);

    // Se imprime la segunda referencia.
    console.log(config2);

    // Esto devolverá true porque ambas variables apuntan
    // exactamente al mismo objeto en memoria.
    console.log(config1 === config2);

})();
