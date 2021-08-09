import React from 'react';

const RightBtn = ({ onClick }) => {
    return (
        <svg onClick={onClick} style={{ cursor: 'pointer' }} xmlns="http://www.w3.org/2000/svg" width=".6em" height=".6em" fill="currentColor"  viewBox="0 0 16 16"><path d="M14 1a1 1 0 011 1v12a1 1 0 01-1 1H2a1 1 0 01-1-1V2a1 1 0 011-1h12zM2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2z"></path><path d="M5.795 12.456A.5.5 0 015.5 12V4a.5.5 0 01.832-.374l4.5 4a.5.5 0 010 .748l-4.5 4a.5.5 0 01-.537.082z"></path></svg>
    )
}

export default React.memo(RightBtn);