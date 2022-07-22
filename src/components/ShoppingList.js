import React, { useEffect, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
function ShoppingList() {
    const [data, setData] = useState({})
    const [items, setItems] = useState([]);
    const [total, setTotal] = useState(0)
    const handleItem = () => {
        if (Object.keys(data).length > 0) {
            setItems([...items, data])
            setData({ name: '', count: 1, check: false })
        }
        return
    }
    const handleCountMinus = (index) => {
        const itemCopy = [...items];
        itemCopy[index].count = itemCopy[index].count - 1
        console.log("itemscopy", itemCopy)
        setItems(itemCopy)
    }
    const handleCountPlus = (index) => {
        const itemCopy = [...items];
        itemCopy[index].count = itemCopy[index].count + 1
        console.log("itemscopy", itemCopy)
        setItems(itemCopy)
    }

    const handleCheck = (index) => {
        const itemCopy = [...items];
        itemCopy[index].check = !itemCopy[index].check
        console.log("itemscopy", itemCopy)
        setItems(itemCopy)
    }
    useEffect(() => {
        let total1 = 0
        let total2 = items.forEach(item => total1 += item.count)
        console.log("Toal", total2)
        setTotal(total1)
    }, [items])
    console.log("Items", items)
    return (
        <div className='box'>
            <div className='add'>
                <input placeholder='Add an item...' value={data.name} onChange={e => setData({ name: e.target.value, count: 1, check: false })} />
                <button className='plus' onClick={handleItem}>
                    <AiOutlinePlus />
                </button>
            </div>
            {items.length > 0 ?
                <div className='item'>
                    <ul>
                        {items.map((item, index) => {
                            return (
                                <li key={index}>
                                    <div className='check'>
                                        <input type={'checkbox'} id={item.name} checked={item.check} onChange={() => handleCheck(index)} />
                                        {item.check == true ?
                                            <label htmlFor={item.name} style={{ textDecorationLine: 'line-through' }}>{item.name}</label>
                                            : <label htmlFor={item.name}>{item.name}</label>

                                        }
                                    </div>

                                    <div className='count'>
                                        <button type='button' onClick={() => handleCountMinus(index)}>
                                            <IoIosArrowBack />
                                        </button>
                                        <span>{item.count}</span>
                                        <button type='button' onClick={() => handleCountPlus(index)}>
                                            <IoIosArrowForward />
                                        </button>
                                    </div>
                                </li>
                            )
                        })}

                    </ul>

                </div>
                : null}
            <div>
                {items.length > 0 ? <p style={{ fontSize: '1.5rem' }}>Total Items = {total}</p> : null}
            </div>
        </div >
    )
}

export default ShoppingList