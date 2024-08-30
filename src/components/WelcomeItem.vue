<template>
	<div class="flex relative place-items-center border rounded-lg px-4 py-2 bg-slate-100">
		<i class="flex place-items-center place-content-center size-10 border rounded-lg bg-slate-200">
			<slot name="icon"></slot>
		</i>
		<div class="flex-1 ml-4 max-w-[48rem] px-8">
			<h3 class="text-xl font-medium mb-2">
				<slot name="heading"></slot>
			</h3>
			<slot></slot>
		</div>
	</div>
</template>
