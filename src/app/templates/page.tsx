import React from 'react';
import TemplateTable from '../../components/TemplateTable';
import { fetchTemplates } from '@/utils/mongo';

export default async function HostsPage() {
    const templates = await fetchTemplates();

    return (
        <TemplateTable templates={templates} />
    );
}
