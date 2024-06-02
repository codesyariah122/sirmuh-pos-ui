<template>
	<div>
		<tabs :options="{ useUrlFragment: false, defaultTabHash: items[0].id, }" >
			<tab v-for="(item, idx) in items" :key="item.id" class="h-48" :suffix="`&nbsp;<span class='absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2'>${item.key === 'supplier' ? reportTotals[idx].supplier : reportTotals[idx].pelanggan}</span>`" :name="item.title" >
				<div class="block w-full overflow-x-auto overflow-y-auto h-60 -mt-10">
					<table class="items-center border-collapse table-sticky w-full">
						<thead class="sticky-header">
							<tr>
								<th class="px-6 py-3 bg-blueGray-50 text-blueGray-500 border-blueGray-100">
									No
								</th>
								<th class="px-6 py-3 bg-blueGray-50 text-blueGray-500 border-blueGray-100">
									Jenis
								</th>
								<th class="px-6 py-3 bg-blueGray-50 text-blueGray-500 border-blueGray-100">
									{{item.type}}
								</th>
								<th class="px-6 py-3 bg-blueGray-50 text-blueGray-500 border-blueGray-100">
									Jatuh Tempo
								</th>
								<th class="px-6 py-3 bg-blueGray-50 text-blueGray-500 border-blueGray-100">
									Jumlah
								</th>
							</tr>
						</thead>
						<tbody>
							<template v-for="(reports, date, dateIdx) in item.reports">
								<tr v-for="(entry, idx) in reports" :key="`${date}-${idx}`">
									<th class="whitespace-nowrap p-4 text-md">{{ idx + 1 }}</th>
									<td class="whitespace-nowrap p-4 text-md">{{ entry.jenis }}</td>
									<td class="whitespace-nowrap p-4 text-md">
										<span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded border border-green-400">
											{{ entry.keterangan }}
										</span>
									</td>
									<td class="whitespace-nowrap p-4 text-md text-left">{{ $moment(entry.jatuh_tempo).locale('id').format('LL') }}</td>
									<td class="px-6 py-4 text-right text-md">{{ $format(entry.jumlah) }}</td>
								</tr>
							</template>
						</tbody>
					</table>
				</div>
			</tab>
		</tabs>
	</div>
</template>

<script>
	export default {
		props: {
			report: {
				type: [Array, Object],
			default: function() {
				return {}
			}
		},
		reportTotals: {
			type: [Array, Object],
		default: function() {
			return {}
		}
	}
},
data() {
	return {
		items: [
			{id:1, title: 'Hutang', hash: "HUTANG", type: "Supplier", key: 'supplier', count: this.reportTotals.supplier, reports: this.report.hutangs},
			{id:2, title: 'Piutang', hash: "PIUTANG", type: "Pelanggan", key: 'pelanggan', count: this.reportTotals.pelanggan, reports: this.report.piutangs}
			]
	}
},

methods: {
	generateJT(tgl, tempo) {
		const tanggalJatuhTempo = this.$moment(tgl).add(tempo, 'days');
		const hariSisa = tanggalJatuhTempo.diff(this.$moment(), 'days');

      	// return `Jatuh tempo dalam ${hariSisa} hari lagi, pada ${tanggalJatuhTempo.format('LL')}`;
		return `${hariSisa} hari lagi`;
	},
},

computed: {
	results() {
		const items = this.items.map(item => item.reports);
		return items
	}
}
}
</script>