function App() {
	return (
		<div>
			<Tweet
				name="Hava Feder"
				username="havafeder"
				date={new Date().toDateString()}
				message="HAHA"
			/>
			<Tweet
				name="Marv Feder"
				username="maaarrvvvv"
				date={new Date().toDateString()}
				message="MEOW"
			/>
			<Tweet
				name="Fergus Feder"
				username="fergussssss"
				date={new Date().toDateString()}
				message="MEOWWWWWWWWWWWWW"
			/>
		</div>
	);
}