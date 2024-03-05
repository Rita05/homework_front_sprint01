import { CurrentUser } from './CurrentUser';
import { UsersObjectType } from './HW2';

type UserList2PropsType = {
	users: UsersObjectType;
	filterUsers: () => void;
};

export const UserList2 = (props: UserList2PropsType) => {
	const { users: { myFriends }, filterUsers } = props;
	return (
		<div id={'hw02-users'}>
			<h2>User List:</h2>

			<button id={'hw02-filter-button'} onClick={() => filterUsers()}>SHOW ME FRIENDS FROM LA</button>

			<ul>
				{myFriends.map((user) => (
					< CurrentUser user={user} />
				))}
			</ul>
		</div>
	);
};
