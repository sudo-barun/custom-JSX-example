export
function Foo({ message }: { message: string})
{
	return (
		<div class="Foo">
			<h2>Foo</h2>
			<p>This is Foo.</p>
			<p>
				<b>Message: </b>
				{message}
			</p>
		</div>
	);
}
