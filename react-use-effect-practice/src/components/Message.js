import {useEffect, useState} from 'react';


function Message({ size, featherCount}) {
const [classSize, setClassSize] = useState('');

    // useEffect(() => {n
    //     console.log('Message', size);
    // }, [size]);

    useEffect(() => {

        console.log(`Message size ${size}`);

        let className = '';

          switch (classSize) {
            case `m`:
              className =  `medium`
              break;
              case `l`:
                className =  `large`
                break;
                case `xl`:
                  className =  `xlarge`
                  break;
              default:
                className =  `small`
                break;
          }
          // console.log(className);
          setClassSize(className);
      }, [size]);



    return (
        <div className={`message ${classSize}`}>
            {featherCount > 0 ? `I have ${featherCount} feathers`: 'Oh my! Your bird is naked!'}
        </div>
    );
};

export default Message;
