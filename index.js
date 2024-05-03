document.addEventListener('DOMContentLoaded', function() {
    const items = 
    // [
    //     { type: 'Fruit', name: 'Apple' },
    //     { type: 'Vegetable', name: 'Broccoli' },
    //     { type: 'Vegetable', name: 'Mushroom' },
    //     { type: 'Fruit', name: 'Banana' },
    //     { type: 'Vegetable', name: 'Tomato' },
    //     { type: 'Fruit', name: 'Orange' },
    //     { type: 'Fruit', name: 'Mango' },
    //     { type: 'Fruit', name: 'Pineapple' },
    //     { type: 'Vegetable', name: 'Cucumber' },
    //     { type: 'Fruit', name: 'Watermelon' },
    //     { type: 'Vegetable', name: 'Carrot' },
    // ];
    [
        {
            type: 'Fruit',
            name: 'Apple',
        },
        {
            type: 'Vegetable',
            name: 'Broccoli',
        },
        {
            type: 'Vegetable',
            name: 'Mushroom',
        },
        {
            type: 'Fruit',
            name: 'Banana',
        },
        {
            type: 'Vegetable',
            name: 'Tomato',
        },
        {
            type: 'Fruit',
            name: 'Orange',
        },
        {
            type: 'Fruit',
            name: 'Mango',
        },
        {
            type: 'Fruit',
            name: 'Pineapple',
        },
        {
            type: 'Vegetable',
            name: 'Cucumber',
        },
        {
            type: 'Fruit',
            name: 'Watermelon',
        },
        {
            type: 'Vegetable',
            name: 'Carrot',
        },
    ]

    const mainList = document.getElementById('mainList');
    items.forEach(item => {
        const button = document.createElement('button');
        button.textContent = item.name;
        button.classList.add('item');
        button.onclick = function() {
            const targetColumn = item.type === 'Fruit' ? 'fruitsColumn' : 'veggiesColumn';
            document.getElementById(targetColumn).appendChild(button);
            setTimeout(() => {
                mainList.appendChild(button);
            }, 5000);
        };
        mainList.appendChild(button);
    });
});
