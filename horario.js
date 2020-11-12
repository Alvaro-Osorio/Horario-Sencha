/*
grid1.js
Uso de tabla con información fija con ExtJS
*/

Ext.require(['Ext.plugin.Viewport']);
Ext.onReady(function() {
    //Definir datos
    //El espacio de nombres "data" implica que ahí se mantiene información de la aplicación 
    //La clase Store implica un almacén de datos en cliente (puede ser fijo o provenir del servidor)
    Ext.create('Ext.data.Store', {
        storeId: 'datosStore', //identificador del almacenamiento para usar posteriormente
        fields: ['hora', 'materia', 'dia'], //campos que forman el "registro"
        data: [ //en este caso, es un arreglo de objetos
            { hora: '06:00', nombre: '' },
            { hora: '07:00', nombre: 'TALLER DE SISTEMAS OPERATIVOS' },
            { hora: '08:00', nombre: 'APLICACIONES ENRIQUECIDAS DE LA INTERNET' },
            { hora: '09:00', nombre: '' },
            { hora: '10:00', nombre: 'METODOLOGIAS EMERGENTES PARA LA WEB' },
            { hora: '11:00', nombre: 'TALLER DE INVESTIGACIÓN II' },
            { hora: '12:00', nombre: 'ARQUITECTURA DE SOFTWARE PARA LA WEB' },
            { hora: '13:00', nombre: '' },
            { hora: '14:00', nombre: '' },
            { hora: '15:00', nombre: '' },
            { hora: '16:00', nombre: '' },
            { hora: '17:00', nombre: '' },
            { hora: '18:00', nombre: '' },
            { hora: '19:00', nombre: 'DESARROLLO PARA LA WEB MOVIL' },
            { hora: '20:00', nombre: 'INTELIGENCIA ARTIFICIAL' },
            { hora: '21:00', nombre: '' },
        ]
    });

    //Definir tabla y relacionarla
    Ext.create('Ext.grid.Panel', {
        headerPosition: 'center', //probar con y sin atributo
        store: Ext.data.StoreManager.lookup('datosStore'), // Al administrador de almacen busque relación con almacenamiento
        columns: [ //columnas de tabla, pueden ser menos que en el almacenamiento
            {
                text: 'hora / dia',
                dataIndex: 'hora', //nombre del "campo" del "registro"
            }, {
                text: 'Lunes',
                dataIndex: 'nombre', //nombre del "campo" del "registro"
                flex: 1
            }, //permite o no que se oculte la columna
            {
                text: 'Martes',
                dataIndex: 'nombre',
                flex: 1
            },
            {
                text: 'Miercoles',
                dataIndex: 'nombre',
                flex: 1
            },
            {
                text: 'Jueves',
                dataIndex: 'nombre',
                flex: 1
            },
            {
                text: 'Viernes',
                dataIndex: '',

            },
            {
                text: 'Sábado',
                dataIndex: '',

            }
        ],
        align: 'center',
        height: 600,
        width: 1200,
        renderTo: Ext.getBody() //se pega al body
    });
});