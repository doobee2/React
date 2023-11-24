import { useParams } from 'react-router-dom'

const data = {
    seulpark: {
        name: '슬박',
        description: '용현동 불주먹',
        imgSrc: 'https://i.namu.wiki/i/_bDfpgMqNtlbb_04dyY8fSSciz3oAfuMaRiF_8x7GMwMjofOQIlXzmpRsk-aoM7BD2om7jgFbquWkGOM56z5wQ.webp',
    },
    seulbee: {
        name: '슬비',
        description: '쩝쩝박사 꿀꿀',
        imgSrc: 'https://item.kakaocdn.net/do/e34a0b65c206423bcd09af6b2b4d366d7154249a3890514a43687a85e6b6cc82',
    },
    doobee: {
        name: '이슬비',
        description: '춘재교육 코린이',
        imgSrc: 'https://i.pinimg.com/1200x/34/3d/a8/343da87798e1c6356b47236f21099b63.jpg',
    },
}
const Profile = () => {
    const params = useParams();
    const profile = data[params.username];
  return (
    <div>
        <h2>Profile</h2>
        <hr/>
        { profile ? (
            <div>
            <h3>{profile.name}</h3>
            <p>{profile.description}</p>
            <img src={profile.imgSrc}/>
            </div>
        ) : (
            <p>그런 사람 없습니다!</p>
        )}
    </div>
  )
}

export default Profile