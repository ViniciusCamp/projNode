import * as path from 'path'
import moduleAlias from 'module-alias'

const files = path.resolve(__dirname, '../..')

moduleAlias.addAliases({
    '@src': path.join(files, 'src'),
    '@controller': path.join(files, 'src/app/controller'),
    '@test': path.join(files, 'test'),
});