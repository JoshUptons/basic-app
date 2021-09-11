<template>
    <div id="everything-container">
        <table id="partsTable">
            <thead>
                <tr id="column-headers">
                    
                </tr>
            </thead>
            <tbody id="table-body"></tbody>
        </table>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'Everything',
    methods: {
        ...mapGetters([
            'getParts',
        ]),
        buildHeaders() {
            let part = this.getParts()[0]
            let headRow = document.getElementById('column-headers')
            for(let col in part) {
                if (col != 'field14' && col != "URL") {
                    let th = document.createElement('th')
                    th.innerHTML = col.toUpperCase()
                    headRow.appendChild(th)
                }
            }
        },
        buildRows() {
            let parts = this.getParts()
            parts.forEach(part => {
                let row = document.createElement('tr')
                for (let param in part) {
                    if (param != 'field14' && param != 'URL') {
                        let td = document.createElement('td')
                        td.innerHTML = part[param]
                        row.appendChild(td)
                    }
                }
                if ('URL' in part) row.classList.add('url-true')
                document.getElementById('table-body').appendChild(row)
                row.addEventListener('click', () => {
                    if (row.classList.contains('url-true')) this.$router.push('/parts/' + encodeURI(part['Complete Number']))
                })
            })
        }
    },
    mounted() {
        this.buildHeaders()
        this.buildRows()
    }
}
</script>

<style>
#everything-container {
    width: 100%;
    height: 100%;
}
#partsTable {
    border-collapse: collapse;
    width: 100%;
    font-size: .65rem;
    border: 1px solid #ccc;
}
#partsTable thead tr {
    background: #11b8ff;
    font-size: .8rem;
}
#partsTable th {
    border-right: 1px solid #ccc;
    padding: .25rem
}
#partsTable th:last-child {
    border-right: none;
}
#partsTable tbody tr {
    border-bottom: 1px solid #ccc;
}
#partsTable tbody tr td {
    padding: .25rem;
    border-right: 1px solid #ccc;
}
#partsTable tbody tr:hover > td  {
    background: #ccc;
    color: #333;
}
.url-true {
    color: blue;
    font-weight: bold;
}
</style>