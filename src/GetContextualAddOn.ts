function getContextualAddOn(event: any) {
    const activeMessageId = event.messageMetadata.messageId;
    const activeMessageData = GmailApp.getMessageById(activeMessageId);
    const activeMessageAuthor = activeMessageData.getFrom();
    const activeMessageLabelName = activeMessageData.getThread().getLabels().length ? activeMessageData.getThread().getLabels()[0].getName() : 'No Labels';
    const activeMessageDate: string = String(activeMessageData.getDate());
    console.log(activeMessageData.getDate());

    let card = CardService.newCardBuilder();
    let section = CardService.newCardSection();

    card.setHeader(CardService.newCardHeader().setTitle('Very Simple App'));
    section.addWidget(CardService.newTextInput()
        .setFieldName('Date')
        .setTitle('Date')
        .setValue(activeMessageDate)
    );
    section.addWidget(CardService.newTextInput()
        .setFieldName('Message Label Name')
        .setTitle('Message Label Name')
        .setValue(activeMessageLabelName)
    );
    section.addWidget(CardService.newTextInput()
        .setFieldName('Message Author')
        .setTitle('Message Author')
        .setValue(activeMessageAuthor)
    );
    section.addWidget(CardService.newTextInput()
        .setFieldName('Message Id')
        .setTitle('Message Id')//test
        .setValue(activeMessageId)
    );

    card.addSection(section);

    return [card.build()];
}