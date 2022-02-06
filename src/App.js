import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import { Space, Radio, Button, PageHeader, InputNumber } from 'antd';

function App() {

  const [setupType, setSetupType] = useState('tubo');

  const [telaPrice, setTelaPrice] = useState(24)

  const [tela, setTela] = useState(0);
  const [ojales, setOjales] = useState(1.5);
  const [instalation, setInstalation] = useState(20);
  const [tube, setTube] = useState(35);
  const [confeccion, setConfeccion] = useState(25);
  const [percentage, setPercentage] = useState(20);

  const [totalPrice, setTotalPrice] = useState(0)

  const handleOnReset = () => {
    setTela(0);
    setOjales(1.5);
    setInstalation(20);
    setTube(35);
    setConfeccion(25);
    setPercentage(20);
    setTotalPrice(0)
  }

  const handleOnCalcular = () => {
    const percentageWin = ((tela * telaPrice) + (7 * tela * ojales) + instalation + tube + confeccion) * (percentage / 100)
    setTotalPrice(((tela * telaPrice) + (7 * tela * ojales) + instalation + tube + confeccion + percentageWin).toFixed(2))
  }

  return (
    <div className="App">
      <PageHeader
        className="site-page-header"
        title="Tela Price App"
      />

      <div className="main-section">

        <Radio.Group defaultValue={setupType} onChange={e => setSetupType(e.target.value)}>
          <Radio value="tubo">Tubo</Radio>
          <Radio value="riel" disabled>Riel</Radio>
        </Radio.Group>

        <div>
          <span>Tela Price:</span>
          <InputNumber min={1} defaultValue={telaPrice} onChange={e => setTelaPrice(e)} />
        </div>

        <br />
        <br />


        <div>
          <span>Tela m:</span>
          <InputNumber min={0} defaultValue={tela} onChange={e => {
            setTela(e)
            // setTotalTelaPrice(e * telaPrice)
          }} />
          <span className='right-item'>${tela * telaPrice}</span>
        </div>
        <div>
          <span>Ojales:</span>
          <InputNumber min={1} defaultValue={ojales} onChange={e => setOjales(e)} />
          <span className='right-item'>${7 * tela * ojales}</span>
        </div>
        <div>
          <span>Instalacion:</span>
          <InputNumber min={1} defaultValue={instalation} onChange={e => setInstalation(e)} />
          <span className='right-item'>${instalation}</span>
        </div>
        <div>
          <span>Tubo:</span>
          <InputNumber min={1} defaultValue={tube} onChange={e => setTube(e)} />
          <span className='right-item'>${tube}</span>
        </div>
        <div>
          <span>Confeccion:</span>
          <InputNumber min={1} defaultValue={confeccion} onChange={e => setConfeccion(e)} />
          <span className='right-item'>${confeccion}</span>
        </div>
        <div>
          <span>Porcentaje:</span>
          <InputNumber min={1} defaultValue={percentage} onChange={e => setPercentage(e)} />
          <span className='right-item'>${((tela * telaPrice) + (7 * tela * ojales) + instalation + tube + confeccion) * (percentage / 100)}</span>
        </div>
      </div>

      <div className="btn-section">
        <Button type="primary" onClick={handleOnCalcular}>Calcular</Button>
        <Button type="danger" onClick={handleOnReset}>Resetear</Button>
      </div>

      {
        !!totalPrice && (
          <div className='total-price-section'>
            <span>Precio Total: ${totalPrice}</span>
          </div>
        )
      }


    </div>
  );
}

export default App;
