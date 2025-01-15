import React from 'react'

// icon 값만 내려받아서 동작하는 아이콘 버튼용 컴포넌트
const IconButton = ({ icon, onClick }) => {
  return (
    <button onClick = {onClick} // 여러 버튼을 구현하기 위해 props로 내려받기
        className={`w-8 text-xl font-semibold cursor-pointer`}>
        {icon}
    </button>
  )
}

export default IconButton