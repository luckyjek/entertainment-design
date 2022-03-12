import firebaseApp from './firebase';
/**
 * card의 정보를 가지고있는 Class
 */
class CardRepository {
    syncCards(userId, onUpdate){
        const ref = firebaseApp.database().ref(`${userId}/cards`);
        ref.on('value', snapshot =>{
            const value = snapshot.val();
            value && onUpdate(value);
        });
        return () => ref.off();
    }   
    saveCard(userId, card){
        //ref뒤에 저장하고자하는 경로(자유) ->set을 이용해서 오브젝트를 전달
        firebaseApp.database().ref(`${userId}/cards/${card.id}`).set(card);
    }

    romoveCard(userId, card){
        //ref뒤에 저장하고자하는 경로(자유) ->set을 이용해서 오브젝트를 전달
        firebaseApp.database().ref(`${userId}/cards/${card.id}`).remove();
    }
}

export default CardRepository;