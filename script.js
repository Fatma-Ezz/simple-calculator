body {
    font-family: 'Helvetica Neue', Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background: linear-gradient(135deg, #e2e2e2 25%, #ffffff 25%, #ffffff 50%, #e2e2e2 50%, #e2e2e2 75%, #ffffff 75%, #ffffff 100%);
    background-size: 28.28px 28.28px;
}

#calculator-container {
    text-align: center;
    background-color: #ffffff;
    padding: 40px;
    border-radius: 15px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.1), 0 6px 6px rgba(0,0,0,0.1);
}

input[type="number"] {
    margin: 10px;
    padding: 15px;
    width: 250px;
    font-size: 18px;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: inset 0 1px 3px rgba(0,0,0,0.1);
}

button {
    padding: 15px 30px;
    margin: 10px;
    font-size: 18px;
    cursor: pointer;
    border: none;
    border-radius: 8px;
    background-color: #4CAF50;
    color: white;
    box-shadow: 0 5px 10px rgba(0,0,0,0.1);
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #45a049;
}

#result {
    margin-top: 20px;
    font-size: 22px;
    color: #333;
    font-weight: bold;
}
