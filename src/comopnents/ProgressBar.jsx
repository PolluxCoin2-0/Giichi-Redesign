const ProgressBar = (props) => {
    const { bgcolor, completed, title, value } = props;
  
    const containerStyles = {
      display: 'flex', // Align items in a row
      alignItems: 'center', // Vertically center the progress bar and value
      justifyContent: 'space-between', // Space between progress bar and value
      marginTop: 12,
      width: '90%',
    };
  
    const progressContainerStyles = {
      height: 20,
      flexGrow: 1,
      backgroundColor: "#ffffff",
      borderRadius: 50,
      position: 'relative',
    };
  
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      backgroundColor: bgcolor,
      borderRadius: 'inherit',
      textAlign: 'right',
    
    };
  
    const labelStyles = {
      padding: 5,
      color: 'white',
      fontWeight: 'bold',
      display: "none",
    };
  
    const titleStyles = {
      color: "#ffffff",
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5,
      marginTop: 24,
    };
  
    const valueStyles = {
      marginLeft: '10px', // Space between progress bar and value
      color: '#ffffff',
      fontWeight: 'bold',
      whiteSpace: 'nowrap', // Prevent line break
      fontSize: '24px',
    };
  
    return (
      <div>
        {/* Title above the progress bar */}
        <div style={titleStyles}>{title}</div>
        {/* Progress bar and value on the same row */}
        <div style={containerStyles}>
          {/* Progress bar container */}
          <div style={progressContainerStyles}>
            <div style={fillerStyles}>
              <span style={labelStyles}>{`${completed}%`}</span>
            </div>
          </div>
          {/* Display value outside the progress bar */}
          <span style={valueStyles}>{value}</span>
        </div>
      </div>
    );
  };
  
  export default ProgressBar;
  