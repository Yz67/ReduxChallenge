var modalStyle = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(255, 255, 255, 0)',
    display           : 'flex',
    alignItems        : 'center',
    justifyContent    : 'center'
  },
  content : {
    position                   : 'center',
    top                        : '40px',
    left                       : '40px',
    right                      : '40px',
    bottom                     : '40px',
    border                     : '1px solid #ccc',
    backgroundColor            : 'SlateGray',
    color                      : 'White',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '4px',
    outline                    : 'none',
    padding                    : '20px 20px 10px 20px',
    display                    : 'flex',
    flexDirection              : 'column',
    alignItems                 : 'center',
    justifyContent             : 'center',
    boxShadow: '10px 10px 8px 10px rgba(0,0,0,0.1)' 
  }
};

export default modalStyle;
